import { Router } from "express"
import { createHtmlDoc } from "../../../controllers/html"

const router = Router()

router.get('/get-started', createHtmlDoc({
	template: 'app',
	app: 'get-started/index',
	meta: {
		title: 'Get Started with Adipro\'s Health Quiz'
	}
}))

router.get('/', createHtmlDoc({
	template: 'index',
	page: 'home',
	meta: {
		title: 'PBJ Services'
	}
}))

export {
	router as ClientRouter
}